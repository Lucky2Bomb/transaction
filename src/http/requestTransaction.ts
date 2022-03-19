import axios, { AxiosResponse } from "axios";

interface TransactionData {
  CardNumber: string;
  ExpDate: string;
  Cvv: string;
  Amount: number;
}

interface ResponseData {
  RequestId: string;
  Amount: number;
}

export default function requestTransaction(transaction: TransactionData) {
  return axios.post<AxiosResponse<ResponseData>>("http://localhost:3001/transaction", {
    ...transaction,
  });
}
