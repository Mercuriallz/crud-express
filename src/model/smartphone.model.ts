import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import connectionDatabase from "../database/database";


interface SmartphoneModel extends Model<InferAttributes<SmartphoneModel>, InferCreationAttributes<SmartphoneModel>>{
    id: CreationOptional<number>;
    merk: string,
    nama_smartphone: string,
    harga: number
  }

 const smartphoneModel = connectionDatabase.define<SmartphoneModel>('Smartphone', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    merk: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "merk"
    },
    nama_smartphone: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "nama_smartphone" 
    },
    harga: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "harga"
    }
}, {
    tableName: 'smartphone_baru'
}
);

export default smartphoneModel;