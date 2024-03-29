import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// export class Movie {
//   id: number;
//   title: string;
//   year: number;
//   genres: string[];
// }

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  title: string;

  @Column({ type: 'int', nullable: true })
  year: number;

  @Column({ nullable: false })
  genre: string;
}
