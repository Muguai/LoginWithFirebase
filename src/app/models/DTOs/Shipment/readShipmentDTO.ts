import { Status } from "../../status"

export interface ReadShipmentDTO {
    id: number,
    created: Date,
    status: Status,
    email: string,
    shippingAddress: string,
    billingAddress: string,
    zipCode: string,
    instructions: string | null,
    giftMessage: string | null,
    totalCost: number,
    userId: number,
    countryId: number
}