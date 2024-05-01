const orderModel = require('../models/orderModel');
const orderMOdel=require('../models/orderModel')

const placeFoodOrder=async(req,res)=>{
    try {
        const{cart}=req.body;
        if(!cart){
            return res.status(500).send({
                success:false,
                message:"Add Food to Card"
            })
        }
        let total=0;
        cart.map((i)=>{
            total+=i.price
        })
        
        const neworder=new orderModel({
            food:cart,
            payment:total,
            buyer:req.body.id
        })
        await neworder.save();
        res.status(201).send({
            success:true,
            message:"Order Place Successfully ",
            neworder
        })
    } catch (error) {
        console.log(error)
        re.status(500).send({
            success:false,
            message:"Internal Server Error"
        })
    }
}


const orderStatusController=async(req,res)=>{
    try {
        const orderId=req.params.id;
        if(!orderId){
            return res.status(500).send({
                success:false,
                message:"please correct valid user id"
            })
        }
        const {status}=req.body
        const order=await orderMOdel.findByIdAndUpdate(orderId,{status},{new:true})
        res.status(201).send({
            success:true,
            message:"Order Status Change Successsfully ",

        })
    } catch (error) {
        console.log(error)
        re.status(500).send({
            success:false,
            message:"Internal Server Error with oderStatus"
        })
    }
}
module.exports={placeFoodOrder,orderStatusController}