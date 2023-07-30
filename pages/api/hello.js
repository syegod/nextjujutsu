import main from "@/db/main"

export default function handler(req, res) {
  try {
    main();
    return res.status(200).json({ name: 'John Doe' });
  } catch (err) {
    return res.status(500).json({message: 'Server error.'});
  }
}
