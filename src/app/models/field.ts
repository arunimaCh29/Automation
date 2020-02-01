export interface Field {
  title: string;
  type: string;
  variableType: string,
  variable:string,
  value: string;
  options?: Array<string>;
  restrictions: {
    required: boolean;
    digitsOnly: boolean;
  };
}
