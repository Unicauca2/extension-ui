interface IHandleError {
  message: string;
  errorCode: number;
}
export function handleError({message, errorCode}: IHandleError ) {
  throw new Error(`Internal Server Error${message ? ": " + message : "."}`, {
    errorCode ,
  } as ErrorOptions);
}