export function POST(req) {
  const { userId } = req.body;
  console.log(userId);
  if (userId) {
    console.log("USERID: ", userId);
    return res.status(200).json({ userId });
  } else {
    return res.status(400).json({ message: "No user ID" });
  }
}
