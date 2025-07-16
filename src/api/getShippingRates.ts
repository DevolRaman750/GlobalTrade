// /api/getShippingRates.ts

import { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

const SHIPENGINE_API_KEY = process.env.SHIPENGINE_API_KEY!;

export default async (req: VercelRequest, res: VercelResponse) => {
    if (req.method !== 'POST') return res.status(405).send('Only POST allowed');

    const { fromCountry, toCountry, weightKg } = req.body;

    const response = await fetch('https://api.shipengine.com/v1/rates/estimate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': SHIPENGINE_API_KEY,
        },
        body: JSON.stringify({
            carrier_ids: [], // Leave empty to fetch from all available carriers
            from_country_code: fromCountry,
            to_country_code: toCountry,
            weight: {
                value: weightKg,
                unit: 'kilogram'
            },
        }),
    });

    const data = await response.json();
    res.status(200).json(data);
};
