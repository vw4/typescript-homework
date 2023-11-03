interface ITransaction {
    sum: number,
    from: number,
    to: number,
}

interface ITransactionRequest extends ITransaction {}

// const requestParameters: ITransactionRequest = {
//     sum: 1000,
//     from: 2,
//     to: 4,
// };


enum TransactionStatus {
    Success = 'success',
    Failed = 'failed',
}

interface IStatusedResponse {
    status: TransactionStatus,
    data: unknown,
}

interface IProcessedTransaction extends ITransaction {
    databaseId: number,
}

interface ITransactionResponse extends IStatusedResponse {
    status: TransactionStatus.Success,
    data: IProcessedTransaction,
}

interface IResponseError {
    errorMessage: string,
    errorCode: number,
}

interface ITransactionErrorResponse extends IStatusedResponse {
    status: TransactionStatus.Failed,
    data: IResponseError,
}

// function getResponseData(response: IStatusedResponse): IProcessedTransaction {
//     if (response.status === TransactionStatus.Failed) {
//         const {data} = <ITransactionErrorResponse>response;
//         console.error(data);
//         throw new Error(data.errorMessage);
//     }
//     return (<ITransactionResponse>response).data;
// }
//
// console.log(getResponseData(<IStatusedResponse>{
//     status: TransactionStatus.Success,
//     data: {
//         databaseId: 567,
//         sum: 1000,
//         from: 2,
//         to: 4,
//     }
// }));
//
// console.log(getResponseData(<IStatusedResponse>{
//     status: 'failed',
//     data: {
//         errorMessage: "Недостаточно средств",
//         errorCode: 4,
//     }
// }));