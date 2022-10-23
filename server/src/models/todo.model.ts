import { Schema, model } from 'mongoose';
import { configMongo } from '../config';

// 1. Create an interface representing a document in MongoDB.
interface ITodo {
  name: string;
  status: string;
  
}

// 2. Create a Schema corresponding to the document interface.
const todoSchema = new Schema<ITodo>({
  name: { type: String, required: true },
  status: { type: String, required: true },
});

// 3. Create a Model.
const TodoModel = model<ITodo>('Todo', todoSchema);

export default TodoModel;