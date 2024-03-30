import React from 'react';

export default function(props) {
    return (
        <div>
            <div className="component-light product-show p-3 mb-5">
                <h5 className="text-center">Invoice</h5>
                <div className="pt-3">
                    <h6>
                        {props.invoice.name}
                    </h6>

                    <a href={'/invoice/'+props.invoice.id} className="btn btn-sm btn-primary">More info</a>
                </div>
            </div>
        </div>
    )
}