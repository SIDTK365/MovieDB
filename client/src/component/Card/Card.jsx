import React from 'react'
import yellowStar from '../../images/christmas-star-png-33907.png'
import moviePoster from '../../images/movie-poster.jpg'

const Card = ({ searchResults }) => {
    return (
        <div>
            <div class="px-6 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                {searchResults.map(item => (
                    <div class="p-6 bg-white rounded-xl">
                        <a
                            class="group"
                        >
                            <div class="overflow-hidden">
                                {item.backdrop_path === 'https://image.tmdb.org/t/p/original/null' ? (
                                    <img
                                        src={moviePoster}
                                        class="w-full h-auto hover:scale-105 transition transition-all duration-200 ease-in-out"
                                        alt="Movie Poster"
                                    />
                                ) : (
                                    <img
                                        src={item.backdrop_path}
                                        class="w-full h-auto hover:scale-105 transition transition-all duration-200 ease-in-out"
                                        alt="Movie Poster"
                                    />
                                )}
                            </div>

                            <h3
                                class="mt-6 leading-normal text-gray-800 group-hover:text-purple-400 font-semibold text-xl lg:text-4xl line-clamp-3 transition translation-all duration-200 ease-in-out"
                                title="Movie Title"
                            >
                                {item.title}
                            </h3>
                        </a>

                        <div class="mt-6">
                            <div class="grid grid-cols-2 lg:grid-cols-2 gap-4">
                                <a
                                    class="flex items-center"
                                >
                                    <div class="h-6 w-6 rounded-full">
                                        <img src={yellowStar} />
                                    </div>

                                    <span class="ml-2 text-gray-600">
                                        {item.vote_average}/10
                                    </span>
                                </a>

                                <a
                                    class="inline-block text-gray-600 hover:text-purple-400"
                                >
                                    {item.vote_count} Votes
                                </a>

                                <div class="text-gray-600 whitespace-nowrap">
                                    Release Date: {item.releaseDate}
                                </div>
                            </div>

                            <p class="text-md text-gray-600">
                                Genre: 
                                {item.genre_names.map(genre=>(
                                    <> {genre} </>
                                ))}
                            </p>

                            <p class="mt-6 leading-normal text-md text-gray-600">
                                {item.overview}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card