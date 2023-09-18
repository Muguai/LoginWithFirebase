export interface ReadShipmentDTO {
    id: number,
    created: Date,
    status: Status
    email: string,
    shippingAddres: string,
    billingAddress: string,
    zipCode: string,
    instructions: string | null,
    giftMessage: string | null,
    totalCost: number
}

export enum Status {
    Placed = 'Placed',
    Processing = 'Processing',
    Cancelled = 'Cancelled',
    Packing = 'Packing',
    Shipped = 'Shipped',
    InTransit = 'In Transit',
    OutForDelivery = 'Out For Delivery',
    Delivered = 'Delivered',
    AttemptedDelivery = 'Attempted Delivery',
    LostInTransit = 'Lost In Transit',
    Delayed = 'Delayed',
    Exception = 'Exception'
}