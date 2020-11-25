import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { HttpHeaders } from '@angular/common/http';
import {WebSocketLink} from 'apollo-link-ws';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';

const uri = 'http://localhost:3000/graphql'; // <-- add the URL of the GraphQL server here
const wsUrl = 'ws://localhost:3000/graphql';

export function createApollo(httpLink: HttpLink) {
  const link = split(
    // split based on operation type
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query);
      return kind === 'OperationDefinition' && operation === 'subscription';
    },
    new WebSocketLink({
      uri: wsUrl,
      options: {
        reconnect: true,
      },
    }),
    httpLink.create({
      uri: uri
    })
  );

  return {
    link: link,
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
          fetchPolicy: 'network-only',
          errorPolicy: 'ignore',
      },
      query: {
          fetchPolicy: 'network-only',
          errorPolicy: 'all',
      },
      mutate: {
          errorPolicy: 'all'
      }
  }
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
