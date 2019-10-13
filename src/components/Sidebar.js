import React from 'react'
import { Card, CardTitle, CardBody, Form, FormGroup, Input } from 'reactstrap'

const Sidebar = () => (
   <div>
      <Card>
         <CardBody>
            <CardTitle className="text-center text-uppercase mb-3">
               Newsletter
            </CardTitle>
            <Form className="text-center">
               <FormGroup>
                  <Input type="email" name="email" placeholder="" />
               </FormGroup>
               <button className="btn btn-outline-success">M'abonner</button>
            </Form>
         </CardBody>
      </Card>
   </div>
)

export default Sidebar