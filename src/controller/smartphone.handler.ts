import { Request, Response } from "express";
import smartphoneModel from "../model/smartphone.model";


export async function getSmartphone(req: Request, res: Response) {
    const smartphone = await smartphoneModel.findAll();
    res.status(200).send ({
        data: smartphone,
        message: "berhasil kontoll"
    });
}

export async function addSmartphone(req: Request, res: Response) {
    const addSmartphone = await smartphoneModel.create({
        merk: req.body.merk,
        nama_smartphone: req.body.nama_smartphone,
        harga: req.body.harga
    });

    try {
        res.status(201).send({
            status:201,
            data: {
                data: addSmartphone
            },
            message: "Berhasil tambahin hp ya mek"
        })
    } catch (err) {
        res.status(400).send({
            message: err,
            anotherMessage: "GOblogGGgGGG"
        })
    }
}

export async function deleteSmartphone(req: Request, res: Response) {
    try {
        await smartphoneModel.destroy({
            where: { id: req.params.id }
        },
        ).then(() => {
            return res.status(201).json({
                msg:"berhasil delete"
            })
        })
    } catch(err) {
        return res.status(400).send({
            status:400,
            msg: "cannot delete"
        })
    }
}

export async function editSmartphone(req: Request, res: Response) {

  try {
    await smartphoneModel.update(
        {
            merk: req.body.merk,
            nama_smartphone: req.body.nama_smartphone,
            harga: req.body.harga
        },
        {
            where: {id: req.params.id},
            returning: true,
        }
    ).then(() => {
        return res.status(201).json({
            message: "Sukses Update"
        })
    })
  } catch ( err ){
    return res.status(400).send({
        status: 400,
        message: "Ga ke updateeee"
    })
  }
}