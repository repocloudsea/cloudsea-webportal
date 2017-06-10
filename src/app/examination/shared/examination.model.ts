export class ExaminationModel {
    id: number;
    name: string;
    description: string;
    duration: number;
    category: string;

    constructor(obj?: Object) {
      if (obj) {
        // Assign default values during initializing
        this.id = obj['id'] || 0;
        this.name = obj['name'] || '';
        this.description = obj['description'] || '';
        this.duration = obj['duration'] || 0;
        this.category = obj['category'] || 'General';
      }
    }
}
