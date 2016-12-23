export class Foodtruck {
  constructor(
    public identifier: string,
    public description_short: string,
    public name: string,
    public region: string,
    public url: string,
    public phone: string,
    public email: string,
    public twitter: string,
    public description: string,
    public rating: number,
    public payment_methods: string,
    public promoted: boolean,
    public last: Object,
    public open: Object
  ) { }
}
