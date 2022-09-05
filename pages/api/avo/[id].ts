import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'
const avoDetail = async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    const db = new DB()
    const id = request.query.id as string

    const entry = await db.getById(id)
    response.status(200).json(entry)
  } catch (error) {
    console.log(error)
    response.status(404).end()
  }
}

export default avoDetail
