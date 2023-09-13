export interface ReservationModel {
  startDate: string
  endDate: string
  equipmentReservationRequests: EquipmentReservationRequest[]
}

export interface EquipmentReservationRequest {
  equipmentId: number
  requestedQuantity: number
}
