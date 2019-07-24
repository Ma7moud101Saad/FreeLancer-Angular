export class Job {
  constructor(
    public ID: number,
    public JopName: string,
    public Description: string,
    public JobDate: Date,
    public CategoryId: number,
    public HireManagerId: number
  ) {}
}
