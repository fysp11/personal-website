// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { WorkItemData, WORKS_DATA } from '../../constants/works'
import { ResponseData } from './_types'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData<WorkItemData[]>>
) {
  res.status(200).json({ data: WORKS_DATA })
}
