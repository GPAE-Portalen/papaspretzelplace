import React, { Fragment } from 'react';

interface IMoneyProps {
    value: number;
}

const Money = (props: IMoneyProps): JSX.Element => {
    const hasDecimal: boolean = props.value % 1 !== 0;
    const valueWithDecimal: string = hasDecimal ? props.value.toFixed(2) : `${props.value}.00`;
    const dollarValueDecimal: string = '$' + valueWithDecimal;

    return (
        <React.Fragment>
            {dollarValueDecimal}
        </React.Fragment>
    );
}

interface SingleMenuItemPriceProps {
    value: number;
}

const SingleMenuItemPrice = (props: SingleMenuItemPriceProps): JSX.Element => {
    return (
        <Fragment>
            <Money value={props.value} />
            <Fragment>&nbsp;Each</Fragment>
        </Fragment>
    );
}

interface MultipleMenuItemPriceProps {
    quantity: number;
    value: number;
}

const MultipleMenuItemPrice = (props: MultipleMenuItemPriceProps): JSX.Element => {
    return (
        <Fragment>
            <span>{props.quantity}&nbsp;for&nbsp;</span>
            <Money value={props.value} />
        </Fragment>
    );
}

interface IOuncesProps {
    value: number;
}

const Ounces = (props: IOuncesProps): JSX.Element => {
    return (
        <Fragment>{props.value}&nbsp;oz</Fragment>
    );
}

const Divider = (): JSX.Element => (
    <Fragment>&nbsp;-&nbsp;</Fragment>
);

export const MenuItems = (): JSX.Element => {
    return (
        <React.Fragment>
            <dl>
                <hr />

                <dt>Italian Ice</dt>
                <dd className="ms-2">
                    <div>
                        <span>Kid Size</span>
                        <Divider />
                        <Money value={1.50} />
                    </div>
                    <div>
                        <span>Small</span>
                        <Divider />
                        <Money value={2} />
                    </div>
                    <div>
                        <span>Medium</span>
                        <Divider />
                        <Money value={3} />
                    </div>
                    <div>
                        <span>Large</span>
                        <Divider />
                        <Money value={4} />
                    </div>
                </dd>

                <hr />

                <dt>OMG (Regular)</dt>
                <dd className="ms-2">
                    <div>
                        <span>Regular Size</span>
                        <Divider />
                        <SingleMenuItemPrice value={2} />
                        <Divider />
                        <MultipleMenuItemPrice quantity={3} value={5} />
                    </div>
                    <div>
                        <span>Large</span>
                        <Divider />
                        <SingleMenuItemPrice value={4} />
                        <Divider />
                        <MultipleMenuItemPrice quantity={3} value={10} />
                    </div>
                </dd>

                <hr />

                <dt>Sugar Cinnamon</dt>
                <dd className="ms-2">
                    <div>
                        <span>Regular Size</span>
                        <Divider />
                        <SingleMenuItemPrice value={2} />
                        <Divider />
                        <MultipleMenuItemPrice quantity={3} value={5} />
                    </div>
                    <div>
                        <span>Large</span>
                        <Divider />
                        <SingleMenuItemPrice value={4} />
                        <Divider />
                        <MultipleMenuItemPrice quantity={3} value={10} />
                    </div>
                </dd>

                <hr />

                <dt>All Flavors Specialt Pretzels</dt>
                <dd className="ms-2">
                    <SingleMenuItemPrice value={5} />
                    <Divider />
                    <MultipleMenuItemPrice quantity={5} value={20} />
                </dd>

                <hr />

                <dt>Pretzel Dogs</dt>
                <dd className="ms-2">
                    <div>
                        <span>Regular Size</span>
                        <Divider />
                        <SingleMenuItemPrice value={4} />
                    </div>
                    <div>
                        <span>Minis</span>
                        <Divider />
                        <SingleMenuItemPrice value={0.50} />
                    </div>
                </dd>

                <hr />

                <dt>Pretzel Pizza Pocket</dt>
                <dd className="ms-2">
                    <Money value={5} />
                </dd>

                <hr />

                <dt>Pretzel Porkroll Links</dt>
                <dd className="ms-2">
                    <Money value={5} />
                </dd>

                <hr />

                <dt>All Other Pretzel Sandwiches</dt>
                <dd className="ms-2">
                    <Money value={6} />
                </dd>

                <hr />

                <dt>Nuggets</dt>
                <dd className="ms-2">
                    <div>
                        <MultipleMenuItemPrice quantity={25} value={8} />
                    </div>
                    <div>
                        <MultipleMenuItemPrice quantity={50} value={15} />
                    </div>
                </dd>

                <hr />

                <dt>Specialty Nuggets</dt>
                <dd className="ms-2">
                    <div>
                        <MultipleMenuItemPrice quantity={12} value={8} />
                    </div>
                    <div>
                        <MultipleMenuItemPrice quantity={25} value={15} />
                    </div>
                </dd>

                <hr />

                <dt>Soft Drinks</dt>
                <dd className="ms-2">
                    <div>
                        <Ounces value={16} />
                        <Divider />
                        <Money value={2} />
                    </div>
                    <div>
                        <Ounces value={20} />
                        <Divider />
                        <Money value={2.50} />
                    </div>
                </dd>

                <hr />

                <dt>Bottled Water</dt>
                <dd className="ms-2">
                    <Money value={1.50} />
                </dd>
            </dl>
        </React.Fragment>
    );
}