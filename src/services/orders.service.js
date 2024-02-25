import OrdersRepository from '../repositories/orders.repository.js';

class OrdersService {
  getAllOrders = async () => {
    return await OrdersRepository.getAllOrders();
  };

  getOrderById = async (orderId) => {
    return await OrdersRepository.getOrderById(orderId);
  };

  updateOrder = async (orderId, status) => {
    return await OrdersRepository.updateOrder(orderId, status);
  };

  completeOrder = async (orderId, userId) => {
    return await OrdersRepository.completeOrder(orderId, userId);
  };
}

export default new OrdersService();
