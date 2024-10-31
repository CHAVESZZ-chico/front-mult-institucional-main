import { Api } from "../../Api";

export class UtilityService {
  public async getAll() {
    const response = await Api.get("/utility");
    return response;
  }

  public async getById() {
    const response = await Api.get("/utility/:id");
    return response;
  }

  public async patch(id: string) {
    const response = await Api.patch(`/utility/${id}`);
    return response;
  }

  public async post(id: string) {
    const response = await Api.post(`/utility/${id}`);
    return response;
  }

  public async delete(id: string) {
    const response = await Api.delete(`/utility/${id}`);
    return response;
  }
}