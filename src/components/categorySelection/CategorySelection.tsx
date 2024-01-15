import React from 'react'
import BtnOutline from "../buttons/BtnOutline";
import BtnOutlineBlack from "../buttons/BtnOutlineBlack";
import "./category_selection.scss"

type Props = {}

const Category_selection = (props: Props) => {
  return (
    <div className='cat_select'>
        <BtnOutlineBlack className='btn_outline_black'>Klänningar</BtnOutlineBlack>
        <BtnOutlineBlack className='btn_outline_black'>Blusar</BtnOutlineBlack>
        <BtnOutlineBlack className='btn_outline_black'>Toppar</BtnOutlineBlack>
        <BtnOutlineBlack className='btn_outline_black'>Kjolar</BtnOutlineBlack>
        <BtnOutlineBlack className='btn_outline_black'>Byxor</BtnOutlineBlack>
        <BtnOutlineBlack className='btn_outline_black'>Shorts</BtnOutlineBlack>
        <BtnOutlineBlack className='btn_outline_black'>Jumpsuits</BtnOutlineBlack>
        <BtnOutlineBlack className='btn_outline_black'>Kimonos</BtnOutlineBlack>
    </div>
  )
}

export default Category_selection