import Mail from "../models/MailModel.js";

export const getMails = async (req, res) => {
  const { token } = req.cookies;
  try {
    const response = await Mail.findAll({
      attributes: [
        "uuid",
        "to",
        "from",
        "title",
        "text",
        "createdAt",
        "isRead",
      ],
      where: {
        to: token,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const setIsRead = async (req, res) => {
  const { isRead, uuid } = req.body;
  console.log(req.body);
  return Mail.update(
    {
      isRead,
    },
    {
      where: {
        uuid,
      },
    }
  )
    .then(() => res.status(200).json({ msg: "message read" }))
    .catch((error) => res.status(407).json({ msg: error.message }));
};

export const sendMail = async (req, res) => {
  const { from, to, title, text } = req.body;
  try {
    await Mail.create({
      from,
      to,
      title,
      text,
    });
    res.status(200).json({ msg: "successful" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
