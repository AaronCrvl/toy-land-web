import React from 'react';

export default function SimplifiedContactPage(){
    return(
        <div style= {{'borderTopStyle':'outset', 'marginTop': '20px', 'textAlign': 'center'}}>
            <div style={{display: 'inline-flex', 'marginTop': '50px', 'textAlign': 'center'}}>            
                <div>
                    <h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>    
                    <div>                
                        <p className="mb10" style={{ width:'400px', 'textAlign': 'center'}}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>              
                    </div>
                </div>
                <div>                
                    <p><i className="fa fa-phone"></i>  +0  </p>
                    <p><i className="fa fa-location-arrow"></i> Brazil </p>                
                    <p><i className="fa fa fa-envelope"></i> carvalhosins@gmail.com  </p>
                </div>  
            </div>
        </div>
    );    
}