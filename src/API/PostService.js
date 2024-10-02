import axios from "axios";
import { routes } from "../routes";

export class PostServices {
  static async getAll(limit = 10, page = 10) {
    const response = await axios.get(routes.posts(), {
      params: {
        _limit: limit,
        _page: page,
      },
    });
    return response;
  }

  static async getById(id) {
    const response = await axios.get(routes.post(id));
    return response;
  }

  static async getCommentsByPostId(id) {
    const response = await axios.get(routes.postComments(id))
    return response
  }
}
