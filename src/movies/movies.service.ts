import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private moviesRepository: Repository<Movie>,
  ) {}

  getAll(): Promise<Movie[]> {
    return this.moviesRepository.find();
  }

  searchByGenre(genre: string): Promise<Movie[]> {
    return this.moviesRepository.findBy({
      genre: genre,
    });
  }

  getOne(id: number): Promise<Movie> {
    return this.moviesRepository.findOneBy({ id: id });
  }

  async deleteOne(id: number) {
    await this.moviesRepository.delete(id);
  }

  async create(movieData: CreateMovieDto) {
    this.moviesRepository.save(movieData);
  }

  async update(id: number, updateData: UpdateMovieDto) {
    const prev = this.getOne(id);
    this.deleteOne(id);
    await this.moviesRepository.save({ ...prev, ...updateData });
  }
}
