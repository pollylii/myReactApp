import React, { Component } from 'react'

export default class TableTest extends Component {
    state = {
        headTitle: [ 'staff.No', 'staff Name', 'Time-off Type', 'Start Date', 'End Date', 'Duration', 'Status', 'Approver', 'Source', 'Action',],
        bodyConment: [
            {
                staffNo: '001',
                staffName: '哈哈',
                type: '女',
                start: '9:00',
                end: '18:00',
                Duration: '描述',
                Status: '开始',
                Approver: '申请人',
                Source: '来源',
                Action: '是',

            },
            {
                staffNo: '001',
                staffName: '哈哈',
                type: '女',
                start: '9:00',
                end: '18:00',
                Duration: '描述',
                Status: '开始',
                Approver: '申请人',
                Source: '来源',
                Action: '是',

            },
            
        ]
    }
    render() {
        return (
            <div>
                <table border="1">
                    <thead>
                        <tr>
                            {this.state.headTitle.map((item1, index1) =>
                                <th key={index1}>{item1}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.bodyConment.map((item2, index2) =>
                            <tr key={index2}>
                                <td>{item2.staffNo}</td>
                                <td>{item2.staffName}</td>
                                <td>{item2.type}</td>
                                <td>{item2.start}</td>
                                <td>{item2.end}</td>
                                <td>{item2.Duration}</td>
                                <td>{item2.Status}</td>
                                <td>{item2.Approver}</td>
                                <td>{item2.Source}</td>
                                <td>{item2.Action}</td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        )
    }
}
