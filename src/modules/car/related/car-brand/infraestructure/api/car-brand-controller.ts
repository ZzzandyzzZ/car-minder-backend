import { Request, Response } from "express";

import { type CarBrandService } from "@car-brand/application/car-brand-service";

export class CarBrandController {
  private service: CarBrandService;

  constructor(service: CarBrandService) {
    this.service = service;
  }

  async getAll(_req: Request, res: Response) {
    const brands = await this.service.getAll();
    res.json({
      data: brands,
    });
  }

  async getById(req: Request, res: Response) {
    const brand = await this.service.getById(req.params.id);
    res.json({
      data: brand,
    });
  }
}
