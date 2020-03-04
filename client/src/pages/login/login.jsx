import React from 'react'
import {Form, Input, Button, Checkbox} from 'antd'
import {UserOutlined, LockOutlined} from '@ant-design/icons'
import './login.less'

export default class Login extends React.Component {
	onFinish = values => {
		console.log('Received values of form: ', values)
	}

	render() {
		return (
			<div className="login">
				<section className="login-content">
					<h2>用户登录</h2>
					<Form name="normal_login" className="login-form" initialValues={{remember: true}} onFinish={this.onFinish}>
						<Form.Item name="username" rules={[{required: true, message: 'Please input your Username!'}]}>
							<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
						</Form.Item>
						<Form.Item name="password" rules={[{required: true, message: 'Please input your Password!'}]}>
							<Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
						</Form.Item>
						<Form.Item>
							<Button type="primary" htmlType="submit" className="login-form-button">
								登录
							</Button>
						</Form.Item>
					</Form>
				</section>
			</div>
		)
	}
}
