import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from './db';

interface NoteAttributes {
  id: number;
  title: string;
  content: string;
  userId: number;
}

interface NoteCreationAttributes extends Optional<NoteAttributes, 'id'> {}

class Note extends Model<NoteAttributes, NoteCreationAttributes> implements NoteAttributes {
  public id!: number;
  public title!: string;
  public content!: string;
  public userId!: number;
}

Note.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    tableName: 'notes',
  }
);

export default Note;
