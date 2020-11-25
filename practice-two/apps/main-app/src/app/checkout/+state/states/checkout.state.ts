// Import checkout model
import { Checkout } from '../../models/checkout.model';

// Define a type to return in reducer, this is a list of Checkout
// after handle actions
export type CheckoutState = Checkout[];