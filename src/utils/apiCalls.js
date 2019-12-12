export const fetchData = async(url)  => {
  const response = await fetch(url)
  if(response.ok) {
    const data  = await response.json()
    return data;
  } else {
    throw Error(response.statusText)
  }
}

export const getUser = async (userInfo, url) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(userInfo),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const response = await fetch(url, options)
    return response
}

export const postFavorite = async (movieInfo, id) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(movieInfo),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const response = await fetch(`https://reel-movie-tracker.herokuapp.com/api/v1/users/${id}/moviefavorites`, options)
  const data = await response.json();
    return data
}

export const deleteFavorite = async (userId, movieId) => {
  const options = {
    method: 'DELETE',
    headers: {
    'Content-Type': 'application/json'
    }
  }

  const response = await fetch(`https://reel-movie-tracker.herokuapp.com/api/v1/users/${userId}/moviefavorites/${movieId}`, options);
    return response
}
