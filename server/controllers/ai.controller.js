export const checkAI = async (req, res) => {
    res.status(200).json({
        success: true,
        message: "AI service is working."
    });
};