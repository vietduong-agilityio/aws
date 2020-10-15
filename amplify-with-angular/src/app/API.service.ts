/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export type CreateBookingInput = {
  bookingId?: string | null;
  roomId: string;
  buildingId: string;
  userId: string;
  startTime: string;
  endTime: string;
};

export type CreateBuildingInput = {
  buildingId?: string | null;
  name: string;
  country: string;
  city: string;
  streetAddress: string;
  postalCode: string;
  cityPostalCodeStreet?: string | null;
};

export type ModelBuildingConditionInput = {
  name?: ModelStringInput | null;
  country?: ModelStringInput | null;
  city?: ModelStringInput | null;
  streetAddress?: ModelStringInput | null;
  postalCode?: ModelStringInput | null;
  cityPostalCodeStreet?: ModelStringInput | null;
  and?: Array<ModelBuildingConditionInput | null> | null;
  or?: Array<ModelBuildingConditionInput | null> | null;
  not?: ModelBuildingConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateBuildingInput = {
  buildingId: string;
  name?: string | null;
  country?: string | null;
  city?: string | null;
  streetAddress?: string | null;
  postalCode?: string | null;
  cityPostalCodeStreet?: string | null;
};

export type DeleteBuildingInput = {
  buildingId: string;
};

export type CreateRoomInput = {
  roomId?: string | null;
  buildingId: string;
  name: string;
};

export type ModelRoomConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelRoomConditionInput | null> | null;
  or?: Array<ModelRoomConditionInput | null> | null;
  not?: ModelRoomConditionInput | null;
};

export type UpdateRoomInput = {
  roomId: string;
  buildingId: string;
  name?: string | null;
};

export type DeleteRoomInput = {
  buildingId: string;
  roomId: string;
};

export type CreateUsersInput = {
  userId: string;
  email: string;
  phone: string;
};

export type ModelUsersConditionInput = {
  email?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  and?: Array<ModelUsersConditionInput | null> | null;
  or?: Array<ModelUsersConditionInput | null> | null;
  not?: ModelUsersConditionInput | null;
};

export type UpdateUsersInput = {
  userId: string;
  email?: string | null;
  phone?: string | null;
};

export type DeleteUsersInput = {
  userId: string;
};

export type ModelBookingConditionInput = {
  roomId?: ModelIDInput | null;
  buildingId?: ModelIDInput | null;
  startTime?: ModelStringInput | null;
  endTime?: ModelStringInput | null;
  and?: Array<ModelBookingConditionInput | null> | null;
  or?: Array<ModelBookingConditionInput | null> | null;
  not?: ModelBookingConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateBookingInput = {
  bookingId: string;
  roomId?: string | null;
  buildingId?: string | null;
  userId: string;
  startTime?: string | null;
  endTime?: string | null;
};

export type DeleteBookingInput = {
  userId: string;
  bookingId: string;
};

export type ModelBuildingFilterInput = {
  buildingId?: ModelIDInput | null;
  name?: ModelStringInput | null;
  country?: ModelStringInput | null;
  city?: ModelStringInput | null;
  streetAddress?: ModelStringInput | null;
  postalCode?: ModelStringInput | null;
  cityPostalCodeStreet?: ModelStringInput | null;
  and?: Array<ModelBuildingFilterInput | null> | null;
  or?: Array<ModelBuildingFilterInput | null> | null;
  not?: ModelBuildingFilterInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelIDKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelRoomFilterInput = {
  roomId?: ModelIDInput | null;
  buildingId?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelRoomFilterInput | null> | null;
  or?: Array<ModelRoomFilterInput | null> | null;
  not?: ModelRoomFilterInput | null;
};

export type ModelUsersFilterInput = {
  userId?: ModelIDInput | null;
  email?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  and?: Array<ModelUsersFilterInput | null> | null;
  or?: Array<ModelUsersFilterInput | null> | null;
  not?: ModelUsersFilterInput | null;
};

export type ModelBookingFilterInput = {
  bookingId?: ModelIDInput | null;
  roomId?: ModelIDInput | null;
  buildingId?: ModelIDInput | null;
  userId?: ModelIDInput | null;
  startTime?: ModelStringInput | null;
  endTime?: ModelStringInput | null;
  and?: Array<ModelBookingFilterInput | null> | null;
  or?: Array<ModelBookingFilterInput | null> | null;
  not?: ModelBookingFilterInput | null;
};

export type CreateBookingRoomMutation = {
  __typename: "Booking";
  bookingId: string;
  roomId: string;
  buildingId: string;
  userId: string;
  room: {
    __typename: "Room";
    roomId: string;
    buildingId: string;
    name: string;
    building: {
      __typename: "Building";
      buildingId: string;
      name: string;
      country: string;
      city: string;
      streetAddress: string;
      postalCode: string;
      room: {
        __typename: "ModelRoomConnection";
        nextToken: string | null;
      } | null;
      cityPostalCodeStreet: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateBuildingMutation = {
  __typename: "Building";
  buildingId: string;
  name: string;
  country: string;
  city: string;
  streetAddress: string;
  postalCode: string;
  room: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      roomId: string;
      buildingId: string;
      name: string;
      building: {
        __typename: "Building";
        buildingId: string;
        name: string;
        country: string;
        city: string;
        streetAddress: string;
        postalCode: string;
        cityPostalCodeStreet: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  cityPostalCodeStreet: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateBuildingMutation = {
  __typename: "Building";
  buildingId: string;
  name: string;
  country: string;
  city: string;
  streetAddress: string;
  postalCode: string;
  room: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      roomId: string;
      buildingId: string;
      name: string;
      building: {
        __typename: "Building";
        buildingId: string;
        name: string;
        country: string;
        city: string;
        streetAddress: string;
        postalCode: string;
        cityPostalCodeStreet: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  cityPostalCodeStreet: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteBuildingMutation = {
  __typename: "Building";
  buildingId: string;
  name: string;
  country: string;
  city: string;
  streetAddress: string;
  postalCode: string;
  room: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      roomId: string;
      buildingId: string;
      name: string;
      building: {
        __typename: "Building";
        buildingId: string;
        name: string;
        country: string;
        city: string;
        streetAddress: string;
        postalCode: string;
        cityPostalCodeStreet: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  cityPostalCodeStreet: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateRoomMutation = {
  __typename: "Room";
  roomId: string;
  buildingId: string;
  name: string;
  building: {
    __typename: "Building";
    buildingId: string;
    name: string;
    country: string;
    city: string;
    streetAddress: string;
    postalCode: string;
    room: {
      __typename: "ModelRoomConnection";
      items: Array<{
        __typename: "Room";
        roomId: string;
        buildingId: string;
        name: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    cityPostalCodeStreet: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRoomMutation = {
  __typename: "Room";
  roomId: string;
  buildingId: string;
  name: string;
  building: {
    __typename: "Building";
    buildingId: string;
    name: string;
    country: string;
    city: string;
    streetAddress: string;
    postalCode: string;
    room: {
      __typename: "ModelRoomConnection";
      items: Array<{
        __typename: "Room";
        roomId: string;
        buildingId: string;
        name: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    cityPostalCodeStreet: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteRoomMutation = {
  __typename: "Room";
  roomId: string;
  buildingId: string;
  name: string;
  building: {
    __typename: "Building";
    buildingId: string;
    name: string;
    country: string;
    city: string;
    streetAddress: string;
    postalCode: string;
    room: {
      __typename: "ModelRoomConnection";
      items: Array<{
        __typename: "Room";
        roomId: string;
        buildingId: string;
        name: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    cityPostalCodeStreet: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateUsersMutation = {
  __typename: "Users";
  userId: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUsersMutation = {
  __typename: "Users";
  userId: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteUsersMutation = {
  __typename: "Users";
  userId: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateBookingMutation = {
  __typename: "Booking";
  bookingId: string;
  roomId: string;
  buildingId: string;
  userId: string;
  room: {
    __typename: "Room";
    roomId: string;
    buildingId: string;
    name: string;
    building: {
      __typename: "Building";
      buildingId: string;
      name: string;
      country: string;
      city: string;
      streetAddress: string;
      postalCode: string;
      room: {
        __typename: "ModelRoomConnection";
        nextToken: string | null;
      } | null;
      cityPostalCodeStreet: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateBookingMutation = {
  __typename: "Booking";
  bookingId: string;
  roomId: string;
  buildingId: string;
  userId: string;
  room: {
    __typename: "Room";
    roomId: string;
    buildingId: string;
    name: string;
    building: {
      __typename: "Building";
      buildingId: string;
      name: string;
      country: string;
      city: string;
      streetAddress: string;
      postalCode: string;
      room: {
        __typename: "ModelRoomConnection";
        nextToken: string | null;
      } | null;
      cityPostalCodeStreet: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteBookingMutation = {
  __typename: "Booking";
  bookingId: string;
  roomId: string;
  buildingId: string;
  userId: string;
  room: {
    __typename: "Room";
    roomId: string;
    buildingId: string;
    name: string;
    building: {
      __typename: "Building";
      buildingId: string;
      name: string;
      country: string;
      city: string;
      streetAddress: string;
      postalCode: string;
      room: {
        __typename: "ModelRoomConnection";
        nextToken: string | null;
      } | null;
      cityPostalCodeStreet: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;
};

export type GetBuildingQuery = {
  __typename: "Building";
  buildingId: string;
  name: string;
  country: string;
  city: string;
  streetAddress: string;
  postalCode: string;
  room: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      roomId: string;
      buildingId: string;
      name: string;
      building: {
        __typename: "Building";
        buildingId: string;
        name: string;
        country: string;
        city: string;
        streetAddress: string;
        postalCode: string;
        cityPostalCodeStreet: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  cityPostalCodeStreet: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListBuildingsQuery = {
  __typename: "ModelBuildingConnection";
  items: Array<{
    __typename: "Building";
    buildingId: string;
    name: string;
    country: string;
    city: string;
    streetAddress: string;
    postalCode: string;
    room: {
      __typename: "ModelRoomConnection";
      items: Array<{
        __typename: "Room";
        roomId: string;
        buildingId: string;
        name: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    cityPostalCodeStreet: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetRoomQuery = {
  __typename: "Room";
  roomId: string;
  buildingId: string;
  name: string;
  building: {
    __typename: "Building";
    buildingId: string;
    name: string;
    country: string;
    city: string;
    streetAddress: string;
    postalCode: string;
    room: {
      __typename: "ModelRoomConnection";
      items: Array<{
        __typename: "Room";
        roomId: string;
        buildingId: string;
        name: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    cityPostalCodeStreet: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListRoomsQuery = {
  __typename: "ModelRoomConnection";
  items: Array<{
    __typename: "Room";
    roomId: string;
    buildingId: string;
    name: string;
    building: {
      __typename: "Building";
      buildingId: string;
      name: string;
      country: string;
      city: string;
      streetAddress: string;
      postalCode: string;
      room: {
        __typename: "ModelRoomConnection";
        nextToken: string | null;
      } | null;
      cityPostalCodeStreet: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetUsersQuery = {
  __typename: "Users";
  userId: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
};

export type ListUserssQuery = {
  __typename: "ModelUsersConnection";
  items: Array<{
    __typename: "Users";
    userId: string;
    email: string;
    phone: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetBookingQuery = {
  __typename: "Booking";
  bookingId: string;
  roomId: string;
  buildingId: string;
  userId: string;
  room: {
    __typename: "Room";
    roomId: string;
    buildingId: string;
    name: string;
    building: {
      __typename: "Building";
      buildingId: string;
      name: string;
      country: string;
      city: string;
      streetAddress: string;
      postalCode: string;
      room: {
        __typename: "ModelRoomConnection";
        nextToken: string | null;
      } | null;
      cityPostalCodeStreet: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;
};

export type ListBookingsQuery = {
  __typename: "ModelBookingConnection";
  items: Array<{
    __typename: "Booking";
    bookingId: string;
    roomId: string;
    buildingId: string;
    userId: string;
    room: {
      __typename: "Room";
      roomId: string;
      buildingId: string;
      name: string;
      building: {
        __typename: "Building";
        buildingId: string;
        name: string;
        country: string;
        city: string;
        streetAddress: string;
        postalCode: string;
        cityPostalCodeStreet: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    startTime: string;
    endTime: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateBookingRoomSubscription = {
  __typename: "Booking";
  bookingId: string;
  roomId: string;
  buildingId: string;
  userId: string;
  room: {
    __typename: "Room";
    roomId: string;
    buildingId: string;
    name: string;
    building: {
      __typename: "Building";
      buildingId: string;
      name: string;
      country: string;
      city: string;
      streetAddress: string;
      postalCode: string;
      room: {
        __typename: "ModelRoomConnection";
        nextToken: string | null;
      } | null;
      cityPostalCodeStreet: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateBuildingSubscription = {
  __typename: "Building";
  buildingId: string;
  name: string;
  country: string;
  city: string;
  streetAddress: string;
  postalCode: string;
  room: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      roomId: string;
      buildingId: string;
      name: string;
      building: {
        __typename: "Building";
        buildingId: string;
        name: string;
        country: string;
        city: string;
        streetAddress: string;
        postalCode: string;
        cityPostalCodeStreet: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  cityPostalCodeStreet: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateBuildingSubscription = {
  __typename: "Building";
  buildingId: string;
  name: string;
  country: string;
  city: string;
  streetAddress: string;
  postalCode: string;
  room: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      roomId: string;
      buildingId: string;
      name: string;
      building: {
        __typename: "Building";
        buildingId: string;
        name: string;
        country: string;
        city: string;
        streetAddress: string;
        postalCode: string;
        cityPostalCodeStreet: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  cityPostalCodeStreet: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteBuildingSubscription = {
  __typename: "Building";
  buildingId: string;
  name: string;
  country: string;
  city: string;
  streetAddress: string;
  postalCode: string;
  room: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      roomId: string;
      buildingId: string;
      name: string;
      building: {
        __typename: "Building";
        buildingId: string;
        name: string;
        country: string;
        city: string;
        streetAddress: string;
        postalCode: string;
        cityPostalCodeStreet: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  cityPostalCodeStreet: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateRoomSubscription = {
  __typename: "Room";
  roomId: string;
  buildingId: string;
  name: string;
  building: {
    __typename: "Building";
    buildingId: string;
    name: string;
    country: string;
    city: string;
    streetAddress: string;
    postalCode: string;
    room: {
      __typename: "ModelRoomConnection";
      items: Array<{
        __typename: "Room";
        roomId: string;
        buildingId: string;
        name: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    cityPostalCodeStreet: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateRoomSubscription = {
  __typename: "Room";
  roomId: string;
  buildingId: string;
  name: string;
  building: {
    __typename: "Building";
    buildingId: string;
    name: string;
    country: string;
    city: string;
    streetAddress: string;
    postalCode: string;
    room: {
      __typename: "ModelRoomConnection";
      items: Array<{
        __typename: "Room";
        roomId: string;
        buildingId: string;
        name: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    cityPostalCodeStreet: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteRoomSubscription = {
  __typename: "Room";
  roomId: string;
  buildingId: string;
  name: string;
  building: {
    __typename: "Building";
    buildingId: string;
    name: string;
    country: string;
    city: string;
    streetAddress: string;
    postalCode: string;
    room: {
      __typename: "ModelRoomConnection";
      items: Array<{
        __typename: "Room";
        roomId: string;
        buildingId: string;
        name: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    cityPostalCodeStreet: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateUsersSubscription = {
  __typename: "Users";
  userId: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateUsersSubscription = {
  __typename: "Users";
  userId: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteUsersSubscription = {
  __typename: "Users";
  userId: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateBookingSubscription = {
  __typename: "Booking";
  bookingId: string;
  roomId: string;
  buildingId: string;
  userId: string;
  room: {
    __typename: "Room";
    roomId: string;
    buildingId: string;
    name: string;
    building: {
      __typename: "Building";
      buildingId: string;
      name: string;
      country: string;
      city: string;
      streetAddress: string;
      postalCode: string;
      room: {
        __typename: "ModelRoomConnection";
        nextToken: string | null;
      } | null;
      cityPostalCodeStreet: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateBookingSubscription = {
  __typename: "Booking";
  bookingId: string;
  roomId: string;
  buildingId: string;
  userId: string;
  room: {
    __typename: "Room";
    roomId: string;
    buildingId: string;
    name: string;
    building: {
      __typename: "Building";
      buildingId: string;
      name: string;
      country: string;
      city: string;
      streetAddress: string;
      postalCode: string;
      room: {
        __typename: "ModelRoomConnection";
        nextToken: string | null;
      } | null;
      cityPostalCodeStreet: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteBookingSubscription = {
  __typename: "Booking";
  bookingId: string;
  roomId: string;
  buildingId: string;
  userId: string;
  room: {
    __typename: "Room";
    roomId: string;
    buildingId: string;
    name: string;
    building: {
      __typename: "Building";
      buildingId: string;
      name: string;
      country: string;
      city: string;
      streetAddress: string;
      postalCode: string;
      room: {
        __typename: "ModelRoomConnection";
        nextToken: string | null;
      } | null;
      cityPostalCodeStreet: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateBookingRoom(
    input: CreateBookingInput
  ): Promise<CreateBookingRoomMutation> {
    const statement = `mutation CreateBookingRoom($input: CreateBookingInput!) {
        createBookingRoom(input: $input) {
          __typename
          bookingId
          roomId
          buildingId
          userId
          room {
            __typename
            roomId
            buildingId
            name
            building {
              __typename
              buildingId
              name
              country
              city
              streetAddress
              postalCode
              room {
                __typename
                nextToken
              }
              cityPostalCodeStreet
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          startTime
          endTime
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBookingRoomMutation>response.data.createBookingRoom;
  }
  async CreateBuilding(
    input: CreateBuildingInput,
    condition?: ModelBuildingConditionInput
  ): Promise<CreateBuildingMutation> {
    const statement = `mutation CreateBuilding($input: CreateBuildingInput!, $condition: ModelBuildingConditionInput) {
        createBuilding(input: $input, condition: $condition) {
          __typename
          buildingId
          name
          country
          city
          streetAddress
          postalCode
          room {
            __typename
            items {
              __typename
              roomId
              buildingId
              name
              building {
                __typename
                buildingId
                name
                country
                city
                streetAddress
                postalCode
                cityPostalCodeStreet
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          cityPostalCodeStreet
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBuildingMutation>response.data.createBuilding;
  }
  async UpdateBuilding(
    input: UpdateBuildingInput,
    condition?: ModelBuildingConditionInput
  ): Promise<UpdateBuildingMutation> {
    const statement = `mutation UpdateBuilding($input: UpdateBuildingInput!, $condition: ModelBuildingConditionInput) {
        updateBuilding(input: $input, condition: $condition) {
          __typename
          buildingId
          name
          country
          city
          streetAddress
          postalCode
          room {
            __typename
            items {
              __typename
              roomId
              buildingId
              name
              building {
                __typename
                buildingId
                name
                country
                city
                streetAddress
                postalCode
                cityPostalCodeStreet
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          cityPostalCodeStreet
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBuildingMutation>response.data.updateBuilding;
  }
  async DeleteBuilding(
    input: DeleteBuildingInput,
    condition?: ModelBuildingConditionInput
  ): Promise<DeleteBuildingMutation> {
    const statement = `mutation DeleteBuilding($input: DeleteBuildingInput!, $condition: ModelBuildingConditionInput) {
        deleteBuilding(input: $input, condition: $condition) {
          __typename
          buildingId
          name
          country
          city
          streetAddress
          postalCode
          room {
            __typename
            items {
              __typename
              roomId
              buildingId
              name
              building {
                __typename
                buildingId
                name
                country
                city
                streetAddress
                postalCode
                cityPostalCodeStreet
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          cityPostalCodeStreet
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBuildingMutation>response.data.deleteBuilding;
  }
  async CreateRoom(
    input: CreateRoomInput,
    condition?: ModelRoomConditionInput
  ): Promise<CreateRoomMutation> {
    const statement = `mutation CreateRoom($input: CreateRoomInput!, $condition: ModelRoomConditionInput) {
        createRoom(input: $input, condition: $condition) {
          __typename
          roomId
          buildingId
          name
          building {
            __typename
            buildingId
            name
            country
            city
            streetAddress
            postalCode
            room {
              __typename
              items {
                __typename
                roomId
                buildingId
                name
                createdAt
                updatedAt
              }
              nextToken
            }
            cityPostalCodeStreet
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRoomMutation>response.data.createRoom;
  }
  async UpdateRoom(
    input: UpdateRoomInput,
    condition?: ModelRoomConditionInput
  ): Promise<UpdateRoomMutation> {
    const statement = `mutation UpdateRoom($input: UpdateRoomInput!, $condition: ModelRoomConditionInput) {
        updateRoom(input: $input, condition: $condition) {
          __typename
          roomId
          buildingId
          name
          building {
            __typename
            buildingId
            name
            country
            city
            streetAddress
            postalCode
            room {
              __typename
              items {
                __typename
                roomId
                buildingId
                name
                createdAt
                updatedAt
              }
              nextToken
            }
            cityPostalCodeStreet
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRoomMutation>response.data.updateRoom;
  }
  async DeleteRoom(
    input: DeleteRoomInput,
    condition?: ModelRoomConditionInput
  ): Promise<DeleteRoomMutation> {
    const statement = `mutation DeleteRoom($input: DeleteRoomInput!, $condition: ModelRoomConditionInput) {
        deleteRoom(input: $input, condition: $condition) {
          __typename
          roomId
          buildingId
          name
          building {
            __typename
            buildingId
            name
            country
            city
            streetAddress
            postalCode
            room {
              __typename
              items {
                __typename
                roomId
                buildingId
                name
                createdAt
                updatedAt
              }
              nextToken
            }
            cityPostalCodeStreet
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRoomMutation>response.data.deleteRoom;
  }
  async CreateUsers(
    input: CreateUsersInput,
    condition?: ModelUsersConditionInput
  ): Promise<CreateUsersMutation> {
    const statement = `mutation CreateUsers($input: CreateUsersInput!, $condition: ModelUsersConditionInput) {
        createUsers(input: $input, condition: $condition) {
          __typename
          userId
          email
          phone
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUsersMutation>response.data.createUsers;
  }
  async UpdateUsers(
    input: UpdateUsersInput,
    condition?: ModelUsersConditionInput
  ): Promise<UpdateUsersMutation> {
    const statement = `mutation UpdateUsers($input: UpdateUsersInput!, $condition: ModelUsersConditionInput) {
        updateUsers(input: $input, condition: $condition) {
          __typename
          userId
          email
          phone
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUsersMutation>response.data.updateUsers;
  }
  async DeleteUsers(
    input: DeleteUsersInput,
    condition?: ModelUsersConditionInput
  ): Promise<DeleteUsersMutation> {
    const statement = `mutation DeleteUsers($input: DeleteUsersInput!, $condition: ModelUsersConditionInput) {
        deleteUsers(input: $input, condition: $condition) {
          __typename
          userId
          email
          phone
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUsersMutation>response.data.deleteUsers;
  }
  async CreateBooking(
    input: CreateBookingInput,
    condition?: ModelBookingConditionInput
  ): Promise<CreateBookingMutation> {
    const statement = `mutation CreateBooking($input: CreateBookingInput!, $condition: ModelBookingConditionInput) {
        createBooking(input: $input, condition: $condition) {
          __typename
          bookingId
          roomId
          buildingId
          userId
          room {
            __typename
            roomId
            buildingId
            name
            building {
              __typename
              buildingId
              name
              country
              city
              streetAddress
              postalCode
              room {
                __typename
                nextToken
              }
              cityPostalCodeStreet
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          startTime
          endTime
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBookingMutation>response.data.createBooking;
  }
  async UpdateBooking(
    input: UpdateBookingInput,
    condition?: ModelBookingConditionInput
  ): Promise<UpdateBookingMutation> {
    const statement = `mutation UpdateBooking($input: UpdateBookingInput!, $condition: ModelBookingConditionInput) {
        updateBooking(input: $input, condition: $condition) {
          __typename
          bookingId
          roomId
          buildingId
          userId
          room {
            __typename
            roomId
            buildingId
            name
            building {
              __typename
              buildingId
              name
              country
              city
              streetAddress
              postalCode
              room {
                __typename
                nextToken
              }
              cityPostalCodeStreet
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          startTime
          endTime
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBookingMutation>response.data.updateBooking;
  }
  async DeleteBooking(
    input: DeleteBookingInput,
    condition?: ModelBookingConditionInput
  ): Promise<DeleteBookingMutation> {
    const statement = `mutation DeleteBooking($input: DeleteBookingInput!, $condition: ModelBookingConditionInput) {
        deleteBooking(input: $input, condition: $condition) {
          __typename
          bookingId
          roomId
          buildingId
          userId
          room {
            __typename
            roomId
            buildingId
            name
            building {
              __typename
              buildingId
              name
              country
              city
              streetAddress
              postalCode
              room {
                __typename
                nextToken
              }
              cityPostalCodeStreet
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          startTime
          endTime
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBookingMutation>response.data.deleteBooking;
  }
  async GetBuilding(buildingId: string): Promise<GetBuildingQuery> {
    const statement = `query GetBuilding($buildingId: ID!) {
        getBuilding(buildingId: $buildingId) {
          __typename
          buildingId
          name
          country
          city
          streetAddress
          postalCode
          room {
            __typename
            items {
              __typename
              roomId
              buildingId
              name
              building {
                __typename
                buildingId
                name
                country
                city
                streetAddress
                postalCode
                cityPostalCodeStreet
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          cityPostalCodeStreet
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      buildingId
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBuildingQuery>response.data.getBuilding;
  }
  async ListBuildings(
    buildingId?: string,
    filter?: ModelBuildingFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListBuildingsQuery> {
    const statement = `query ListBuildings($buildingId: ID, $filter: ModelBuildingFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listBuildings(buildingId: $buildingId, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            buildingId
            name
            country
            city
            streetAddress
            postalCode
            room {
              __typename
              items {
                __typename
                roomId
                buildingId
                name
                createdAt
                updatedAt
              }
              nextToken
            }
            cityPostalCodeStreet
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (buildingId) {
      gqlAPIServiceArguments.buildingId = buildingId;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBuildingsQuery>response.data.listBuildings;
  }
  async GetRoom(buildingId: string, roomId: string): Promise<GetRoomQuery> {
    const statement = `query GetRoom($buildingId: ID!, $roomId: ID!) {
        getRoom(buildingId: $buildingId, roomId: $roomId) {
          __typename
          roomId
          buildingId
          name
          building {
            __typename
            buildingId
            name
            country
            city
            streetAddress
            postalCode
            room {
              __typename
              items {
                __typename
                roomId
                buildingId
                name
                createdAt
                updatedAt
              }
              nextToken
            }
            cityPostalCodeStreet
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      buildingId,
      roomId
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRoomQuery>response.data.getRoom;
  }
  async ListRooms(
    buildingId?: string,
    roomId?: ModelIDKeyConditionInput,
    filter?: ModelRoomFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListRoomsQuery> {
    const statement = `query ListRooms($buildingId: ID, $roomId: ModelIDKeyConditionInput, $filter: ModelRoomFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listRooms(buildingId: $buildingId, roomId: $roomId, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            roomId
            buildingId
            name
            building {
              __typename
              buildingId
              name
              country
              city
              streetAddress
              postalCode
              room {
                __typename
                nextToken
              }
              cityPostalCodeStreet
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (buildingId) {
      gqlAPIServiceArguments.buildingId = buildingId;
    }
    if (roomId) {
      gqlAPIServiceArguments.roomId = roomId;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRoomsQuery>response.data.listRooms;
  }
  async GetUsers(userId: string): Promise<GetUsersQuery> {
    const statement = `query GetUsers($userId: ID!) {
        getUsers(userId: $userId) {
          __typename
          userId
          email
          phone
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userId
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUsersQuery>response.data.getUsers;
  }
  async ListUserss(
    userId?: string,
    filter?: ModelUsersFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListUserssQuery> {
    const statement = `query ListUserss($userId: ID, $filter: ModelUsersFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listUserss(userId: $userId, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            userId
            email
            phone
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (userId) {
      gqlAPIServiceArguments.userId = userId;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUserssQuery>response.data.listUserss;
  }
  async GetBooking(
    userId: string,
    bookingId: string
  ): Promise<GetBookingQuery> {
    const statement = `query GetBooking($userId: ID!, $bookingId: ID!) {
        getBooking(userId: $userId, bookingId: $bookingId) {
          __typename
          bookingId
          roomId
          buildingId
          userId
          room {
            __typename
            roomId
            buildingId
            name
            building {
              __typename
              buildingId
              name
              country
              city
              streetAddress
              postalCode
              room {
                __typename
                nextToken
              }
              cityPostalCodeStreet
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          startTime
          endTime
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userId,
      bookingId
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBookingQuery>response.data.getBooking;
  }
  async ListBookings(
    userId?: string,
    bookingId?: ModelIDKeyConditionInput,
    filter?: ModelBookingFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListBookingsQuery> {
    const statement = `query ListBookings($userId: ID, $bookingId: ModelIDKeyConditionInput, $filter: ModelBookingFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listBookings(userId: $userId, bookingId: $bookingId, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            bookingId
            roomId
            buildingId
            userId
            room {
              __typename
              roomId
              buildingId
              name
              building {
                __typename
                buildingId
                name
                country
                city
                streetAddress
                postalCode
                cityPostalCodeStreet
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            startTime
            endTime
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (userId) {
      gqlAPIServiceArguments.userId = userId;
    }
    if (bookingId) {
      gqlAPIServiceArguments.bookingId = bookingId;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBookingsQuery>response.data.listBookings;
  }
  OnCreateBookingRoomListener: Observable<
    OnCreateBookingRoomSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateBookingRoom {
        onCreateBookingRoom {
          __typename
          bookingId
          roomId
          buildingId
          userId
          room {
            __typename
            roomId
            buildingId
            name
            building {
              __typename
              buildingId
              name
              country
              city
              streetAddress
              postalCode
              room {
                __typename
                nextToken
              }
              cityPostalCodeStreet
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          startTime
          endTime
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateBookingRoomSubscription>;

  OnCreateBuildingListener: Observable<
    OnCreateBuildingSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateBuilding {
        onCreateBuilding {
          __typename
          buildingId
          name
          country
          city
          streetAddress
          postalCode
          room {
            __typename
            items {
              __typename
              roomId
              buildingId
              name
              building {
                __typename
                buildingId
                name
                country
                city
                streetAddress
                postalCode
                cityPostalCodeStreet
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          cityPostalCodeStreet
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateBuildingSubscription>;

  OnUpdateBuildingListener: Observable<
    OnUpdateBuildingSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateBuilding {
        onUpdateBuilding {
          __typename
          buildingId
          name
          country
          city
          streetAddress
          postalCode
          room {
            __typename
            items {
              __typename
              roomId
              buildingId
              name
              building {
                __typename
                buildingId
                name
                country
                city
                streetAddress
                postalCode
                cityPostalCodeStreet
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          cityPostalCodeStreet
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateBuildingSubscription>;

  OnDeleteBuildingListener: Observable<
    OnDeleteBuildingSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteBuilding {
        onDeleteBuilding {
          __typename
          buildingId
          name
          country
          city
          streetAddress
          postalCode
          room {
            __typename
            items {
              __typename
              roomId
              buildingId
              name
              building {
                __typename
                buildingId
                name
                country
                city
                streetAddress
                postalCode
                cityPostalCodeStreet
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          cityPostalCodeStreet
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteBuildingSubscription>;

  OnCreateRoomListener: Observable<OnCreateRoomSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateRoom {
        onCreateRoom {
          __typename
          roomId
          buildingId
          name
          building {
            __typename
            buildingId
            name
            country
            city
            streetAddress
            postalCode
            room {
              __typename
              items {
                __typename
                roomId
                buildingId
                name
                createdAt
                updatedAt
              }
              nextToken
            }
            cityPostalCodeStreet
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateRoomSubscription>;

  OnUpdateRoomListener: Observable<OnUpdateRoomSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateRoom {
        onUpdateRoom {
          __typename
          roomId
          buildingId
          name
          building {
            __typename
            buildingId
            name
            country
            city
            streetAddress
            postalCode
            room {
              __typename
              items {
                __typename
                roomId
                buildingId
                name
                createdAt
                updatedAt
              }
              nextToken
            }
            cityPostalCodeStreet
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateRoomSubscription>;

  OnDeleteRoomListener: Observable<OnDeleteRoomSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteRoom {
        onDeleteRoom {
          __typename
          roomId
          buildingId
          name
          building {
            __typename
            buildingId
            name
            country
            city
            streetAddress
            postalCode
            room {
              __typename
              items {
                __typename
                roomId
                buildingId
                name
                createdAt
                updatedAt
              }
              nextToken
            }
            cityPostalCodeStreet
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteRoomSubscription>;

  OnCreateUsersListener: Observable<OnCreateUsersSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateUsers {
        onCreateUsers {
          __typename
          userId
          email
          phone
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateUsersSubscription>;

  OnUpdateUsersListener: Observable<OnUpdateUsersSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUsers {
        onUpdateUsers {
          __typename
          userId
          email
          phone
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateUsersSubscription>;

  OnDeleteUsersListener: Observable<OnDeleteUsersSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUsers {
        onDeleteUsers {
          __typename
          userId
          email
          phone
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteUsersSubscription>;

  OnCreateBookingListener: Observable<
    OnCreateBookingSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateBooking {
        onCreateBooking {
          __typename
          bookingId
          roomId
          buildingId
          userId
          room {
            __typename
            roomId
            buildingId
            name
            building {
              __typename
              buildingId
              name
              country
              city
              streetAddress
              postalCode
              room {
                __typename
                nextToken
              }
              cityPostalCodeStreet
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          startTime
          endTime
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateBookingSubscription>;

  OnUpdateBookingListener: Observable<
    OnUpdateBookingSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateBooking {
        onUpdateBooking {
          __typename
          bookingId
          roomId
          buildingId
          userId
          room {
            __typename
            roomId
            buildingId
            name
            building {
              __typename
              buildingId
              name
              country
              city
              streetAddress
              postalCode
              room {
                __typename
                nextToken
              }
              cityPostalCodeStreet
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          startTime
          endTime
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateBookingSubscription>;

  OnDeleteBookingListener: Observable<
    OnDeleteBookingSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteBooking {
        onDeleteBooking {
          __typename
          bookingId
          roomId
          buildingId
          userId
          room {
            __typename
            roomId
            buildingId
            name
            building {
              __typename
              buildingId
              name
              country
              city
              streetAddress
              postalCode
              room {
                __typename
                nextToken
              }
              cityPostalCodeStreet
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          startTime
          endTime
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteBookingSubscription>;
}
