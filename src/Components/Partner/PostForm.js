import React, {Component} from 'react';
import Axios from 'axios';

function closeForm() {
    document.getElementById("newForm").style.display = "hidden";
}

class PostForm extends Component{
    constructor(props){
        super(props)
        this.state={
            IdPhong: '',
            TenPhong: '',
            LoaiPhong: '',
            ThoiGianNhanPhong: '',
            ThoiGianTraPhong: '',
            SoDem: '',
            SoLuongNguoi: '',
            IdKhachSan: '',
            IdDiaDiem: '',
        }
    }

    changeHandler = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) =>{
        e.preventDefault()
        console.log(this.state)
        Axios.post('http://157.245.207.242:3000/api/phong', this.state).then(response => {
            console.log(response)
        }).catch(error =>{
            console.log(error)
        })
    }
    render() {
        const {IdPhong, TenPhong, LoaiPhong, ThoiGianNhanPhong, ThoiGianTraPhong, SoDem, SoLuongNguoi, IdKhachSan, IdDiaDiem} = this.state
      return (
        <div>
            <form className="bg-blue-300 rounded-lg p-4 shadow-lg" onSubmit={this.submitHandler}>
                <div className="pb-4">
                    Id phòng:
                    <input className="ml-4 text-sm pl-1 rounded-lg" type="text" value={IdPhong} onChange={this.changeHandler} name="IdPhong"/>
                </div>
                <div className="pb-4">
                    Tên phòng:
                    <input className="ml-4 text-sm pl-1 rounded-lg" type="text" value={TenPhong} onChange={this.changeHandler} name="TenPhong"/>
                </div>
                <div className="pb-4">
                    Loại phòng:
                    <input className="ml-4 text-sm pl-1 rounded-lg" type="text" value={LoaiPhong} onChange={this.changeHandler} name="LoaiPhong"/>
                </div>
                <div className="pb-4">
                    Thời gian nhận phòng:
                    <input className="ml-4 text-sm pl-1 rounded-lg" type="date" value={ThoiGianNhanPhong} onChange={this.changeHandler} name="ThoiGianNhanPhong"/>
                </div>
                <div className="pb-4">
                    Thời gian trả phòng:
                    <input className="ml-4 text-sm pl-1 rounded-lg" type="date" value={ThoiGianTraPhong} onChange={this.changeHandler} name="ThoiGianTraPhong"/>
                </div>
                <div className="pb-4">
                    Số đêm:
                    <input className="ml-4 text-sm pl-1 rounded-lg" type="text" value={SoDem} onChange={this.changeHandler} name="SoDem"/>
                </div>
                <div className="pb-4">
                    Số lượng người:
                    <input className="ml-4 text-sm pl-1 rounded-lg" type="text" value={SoLuongNguoi} onChange={this.changeHandler} name="SoLuongNguoi"/>
                </div>
                <div className="pb-4">
                    Số lượng người:
                    <input className="ml-4 text-sm pl-1 rounded-lg" type="text" value={IdKhachSan} onChange={this.changeHandler} name="IdKhachSan"/>
                </div>
                <div className="pb-4">
                    Số lượng người:
                    <input className="ml-4 text-sm pl-1 rounded-lg" type="text" value={IdDiaDiem} onChange={this.changeHandler} name="IdDiaDiem"/>
                </div>
                <button className="outline-none focus:outline-none bg-green-200 p-2 text-blue-700 font-bold rounded-lg shadow-lg" type="submit">SUBMIT</button>
            </form>
        </div>
      )
    }
}
export default PostForm