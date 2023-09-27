import React, { useState } from 'react';
import Flow1Step1 from './Flow1Step1';
import Flow1Step2 from './Flow1Step2';
import Flow1Step3 from './Flow1Step3';
import Flow1Step4 from './Flow1Step4';
import Flow1Step5 from './Flow1Step5';


function Flow1StepForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [requestBody1, setRequestBody1] = useState({ // Instance in an empty JSON Request Body for the downstream component to know the location to which data should map back to.
        name: '',
        type: 'variable',
        sku: '',
        status: 'private',
        categories: [
            {
                id: ''
            }
        ],
        attributes: [
            {
                id: 2,
                variation: true,
                options: []
            },
            {
                id: 1,
                variation: true,
                options: []
            }
        ],
        price: '',
    });

    const [requestBody2, setRequestBody2] = useState({
        create: [
            {
                regular_price: '',
                manage_stock: true,
                stock_quantity: null,
                attributes: [
                    {
                        id: 2,
                        option: ''
                    },
                    {
                        id: 1,
                        option: ''
                    }
                ]
            }
        ]
    });


    const handleChangeRB1 = (name, value) => { // The handleChange hook accepts 2 parameters, 'name' and 'value'. It is the responsibility of every component downstream to pass back the dynamic value(s) according to the end user involvement, and a hardcoded string i.e. the hardcoded name that would associate that data with it's position in the JSON requestBody. ???
        setRequestBody1({
            ...requestBody1, // ???
            [name]: value, // ???
        });
    };

    const handleChangeRB2 = (name, value) => {
        setRequestBody2({
            ...requestBody2, // ???
            [name]: value, // ???
        });
    };

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    return (
        <div>
            {currentStep === 1 && (
                <Flow1Step1
                    data={requestBody1} // Pass the requestBody i.e. the 'data' property for the purpose of downstream components to be able to map into the requestBody.
                    handleChangeRB1={handleChangeRB1} // Pass the handleChange hook for the purpose of enabling downstream components to pass back parameters for the actual executional handleChange hook.
                    nextStep={nextStep}
                />
            )}
            {currentStep === 2 && (
                <Flow1Step2
                    data={requestBody1}
                    handleChangeRB1={handleChangeRB1}
                    nextStep={nextStep}
                />
            )}
            {currentStep === 3 && (
                <Flow1Step3
                    data={requestBody2}
                    handleChangeRB2={handleChangeRB2}
                    nextStep={nextStep}
                />
            )}
            {currentStep === 4 && (
                <Flow1Step4
                    data={{ requestBody1, requestBody2 }}
                    handleChangeRB1={handleChangeRB1}
                    handleChangeRB2={handleChangeRB2}
                    nextStep={nextStep}
                />
            )}
            {currentStep === 5 && (
                <Flow1Step5 data={{ requestBody1, requestBody2 }} />
            )}
        </div>
    );
}

export default Flow1StepForm;
