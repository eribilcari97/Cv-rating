export const analyzeCv = async (req,res)=>{
    const {cvText} = req.body
res.json({
    rating:100,
strength:"",
weakness:"",
suggestions:""

});
};

export const showAllFeautures= async (req,res)=>{
    res.status(201).json({message:"Welcome to Cv-rating"});
}