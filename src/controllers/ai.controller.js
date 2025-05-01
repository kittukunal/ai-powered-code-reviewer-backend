const generateContent = require("../services/ai.service"); // ✅ FIXED

module.exports.getReview = async (req, res) => {
  console.log("🔥 Request received:", req.body);

  const code = req.body.code;

  if (!code) {
    console.log("❌ Code missing");
    return res.status(400).send("Prompt is required");
  }

  try {
    const response = await generateContent(code); // ✅ FIXED
    console.log("✅ AI Response:", response);
    res.send({ response });
  } catch (err) {
    console.error("❌ Error in AI Service:", err);
    res.status(500).send("AI Service Failed");
  }
};
