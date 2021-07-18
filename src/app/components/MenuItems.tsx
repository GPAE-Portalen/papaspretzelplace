import React, { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

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

interface ISizingPrice {
    sizeName: string;
    sizePrice: number;
}

interface IPrice {
    unitPrice?: number;
    sizingPrices?: ISizingPrice[];
}

interface IMenuItemProps {
    title: string;
    price: IPrice;
}

const MenuItem = (props: IMenuItemProps): JSX.Element => {
    const unitPrice = props.price.unitPrice;
    const sizingPrices = props.price.sizingPrices;

    const renderSizingPrices = (sizingPrices: ISizingPrice[]): JSX.Element[] => sizingPrices.map((sizingPrice: ISizingPrice): JSX.Element => {
        const first: boolean = sizingPrices.indexOf(sizingPrice) === 0;
        const className: string = first ? 'pe-2' : 'px-2 border-start'

        return (
            <Fragment key={uuidv4()}>
                <span className={className}>
                    {sizingPrice.sizeName}&nbsp;
                    <Money value={sizingPrice.sizePrice} />
                </span>
            </Fragment>
        );
    });

    return (
        <article className="card shadow border-ppp-blue-100 mb-1">
            <div className="card-body">
                <h2 className="h6 card-title m-0 text-capitalize">{props.title}</h2>
            </div>
            <div className="card-footer">
                {
                    unitPrice &&
                    <p className="card-text">
                        <small>
                            <Money value={unitPrice} />
                        </small>
                    </p>
                }
                {
                    sizingPrices &&
                    <p className="card-text">
                        <small>
                            {
                                renderSizingPrices(sizingPrices)
                            }
                        </small>
                    </p>
                }
            </div>
        </article>
    );
}

export const MenuItems = (): JSX.Element => {
    const pretzels: IMenuItemProps[] = [
        {
            title: 'OMG (Regular)',
            price: { unitPrice: 2 }
        },
        {
            title: 'Cheddar',
            price: { unitPrice: 2.5 }
        },
        {
            title: 'Cinnamon Sugar',
            price: { unitPrice: 2.5 }
        },
        {
            title: 'Everything',
            price: { unitPrice: 2 }
        }
    ];
    const pretzelDogs: IMenuItemProps[] = [
        {
            title: 'Regular + Cheese',
            price: { unitPrice: 4 }
        },
        {
            title: 'Pork Roll',
            price: { unitPrice: 5 }
        },
    ];
    const iceCreams: IMenuItemProps[] = [
        {
            title: 'Chocolate',
            price: {
                sizingPrices: [
                    { sizeName: 'sm', sizePrice: 3 },
                    { sizeName: 'lg', sizePrice: 5 }
                ]
            }
        },
        {
            title: 'Vanilla',
            price: {
                sizingPrices: [
                    { sizeName: 'sm', sizePrice: 3 },
                    { sizeName: 'lg', sizePrice: 5 }
                ]
            }
        },
        {
            title: 'Cookies + Cream',
            price: {
                sizingPrices: [
                    { sizeName: 'sm', sizePrice: 3 },
                    { sizeName: 'lg', sizePrice: 5 }
                ]
            }
        },
        {
            title: 'Mint Chocolate Chip',
            price: {
                sizingPrices: [
                    { sizeName: 'sm', sizePrice: 3 },
                    { sizeName: 'lg', sizePrice: 5 }
                ]
            }
        },
        {
            title: 'Cherry Vanilla',
            price: {
                sizingPrices: [
                    { sizeName: 'sm', sizePrice: 3 },
                    { sizeName: 'lg', sizePrice: 5 }
                ]
            }
        },
        {
            title: 'Moose Tracks',
            price: {
                sizingPrices: [
                    { sizeName: 'sm', sizePrice: 3 },
                    { sizeName: 'lg', sizePrice: 5 }
                ]
            }
        },
        {
            title: 'Chocolate Chip Cookie Dough',
            price: {
                sizingPrices: [
                    { sizeName: 'sm', sizePrice: 3 },
                    { sizeName: 'lg', sizePrice: 5 }
                ]
            }
        },
        {
            title: 'Salted Caramel Pretzel',
            price: {
                sizingPrices: [
                    { sizeName: 'sm', sizePrice: 3 },
                    { sizeName: 'lg', sizePrice: 5 }
                ]
            }
        },
    ];
    const waterIces: IMenuItemProps[] = [
        {
            title: 'Mango',
            price: {
                sizingPrices: [
                    { sizeName: 'sm', sizePrice: 2 },
                    { sizeName: 'md', sizePrice: 3 },
                    { sizeName: 'lg', sizePrice: 5 }
                ]
            }
        },
        {
            title: 'Cherry',
            price: {
                sizingPrices: [
                    { sizeName: 'sm', sizePrice: 2 },
                    { sizeName: 'md', sizePrice: 3 },
                    { sizeName: 'lg', sizePrice: 5 }
                ]
            }
        },
        {
            title: 'Lemon',
            price: {
                sizingPrices: [
                    { sizeName: 'sm', sizePrice: 2 },
                    { sizeName: 'md', sizePrice: 3 },
                    { sizeName: 'lg', sizePrice: 5 }
                ]
            }
        },
        {
            title: 'Blueberry',
            price: {
                sizingPrices: [
                    { sizeName: 'sm', sizePrice: 2 },
                    { sizeName: 'md', sizePrice: 3 },
                    { sizeName: 'lg', sizePrice: 5 }
                ]
            }
        },
        {
            title: 'Watermelon',
            price: {
                sizingPrices: [
                    { sizeName: 'sm', sizePrice: 2 },
                    { sizeName: 'md', sizePrice: 3 },
                    { sizeName: 'lg', sizePrice: 5 }
                ]
            }
        },
        {
            title: 'Strawberry',
            price: {
                sizingPrices: [
                    { sizeName: 'sm', sizePrice: 2 },
                    { sizeName: 'md', sizePrice: 3 },
                    { sizeName: 'lg', sizePrice: 5 }
                ]
            }
        },
    ];
    const dips: IMenuItemProps[] = [
        {
            title: 'Cheese',
            price: { unitPrice: 0.75 }
        }
    ];

    const renderMenuItems = (menuItems: IMenuItemProps[]): JSX.Element[] => menuItems.map((menuItem: IMenuItemProps): JSX.Element => {
        return (
            <MenuItem key={menuItem.title} title={menuItem.title} price={menuItem.price} />
        );
    });

    return (
        <section>
            <h2 className="text-capitalize">Pretzels</h2>
            {renderMenuItems(pretzels)}

            <h2 className="text-capitalize mt-5">Pretzel Dogs</h2>
            {renderMenuItems(pretzelDogs)}

            <h2 className="text-capitalize mt-5">Ice Cream</h2>
            {renderMenuItems(iceCreams)}

            <h2 className="text-capitalize mt-5">Water Ice</h2>
            {renderMenuItems(waterIces)}

            <h2 className="text-capitalize mt-5">Dips</h2>
            {renderMenuItems(dips)}
        </section>
    );
}

export const MenuItems2 = (): JSX.Element => {
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