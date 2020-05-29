import { NowRequest, NowResponse } from "@now/node";

export default (req: NowRequest, res: NowResponse) => {
  const { name } = req.query;
  res.json({ message: `Hello, ${name}` });
};
