export interface Field {
  title: string;
  type: string;
  value: string;
  options?: Array<string>;
  restrictions: {
    required: boolean;
    digitsOnly: boolean;
  };
}
