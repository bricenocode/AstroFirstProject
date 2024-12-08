
import type { Doc, SpaceAPISpaceXResponse } from '../types/api.ts'


export const getLaunchById = async ({id}:{id:string}) => {
  //Podemos ejecutar el JS que queramos
    const url = `https://api.spacexdata.com/v5/launches/${id}`
    const res = await fetch(url)
    const launch = await res.json() as Doc

  return launch;
}
export const getLatestLaunches = async () => {
  //Podemos ejecutar el JS que queramos
    const url = 'https://api.spacexdata.com/v5/launches/query'
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body:JSON.stringify({
        query: {},
        options: {
          sort:{
            date_unix: 'asc'
          },
          limit:12
        }
      })
    })
    const { docs:launches } = await res.json() as SpaceAPISpaceXResponse

  return launches;
}
