// /api/getShippingRates.ts

import { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

const SHIPENGINE_API_KEY = process.env.SHIPENGINE_API_KEY!;

export default async (req: VercelRequest, res: VercelResponse) => {
    if (req.method !== 'POST') {
        return res.status(405).send('Only POST allowed');
    }

    const {
        fromCountry,
        fromPostalCode,
        toCountry,
        toPostalCode = '94105', // Default to San Francisco, USA if not provided
        weightKg,
        dimensions
    } = req.body;

    try {
        const response = await fetch('https://api.shipengine.com/v1/rates/estimate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'API-Key': SHIPENGINE_API_KEY,
            },
            body: JSON.stringify({
                carrier_ids: [],
                from_country_code: fromCountry,
                from_postal_code: fromPostalCode,
                to_country_code: toCountry,
                to_postal_code: toPostalCode,
                weight: {
                    value: weightKg,
                    unit: 'kilogram'
                },
                dimensions: {
                    unit: 'centimeter',
                    length: dimensions.length,
                    width: dimensions.width,
                    height: dimensions.height
                }
            }),
        });

        const data = await response.json();
        res.status(200).json(data);

        console.log("Incoming request body:", req.body);
    } catch (error) {
        console.error('Error fetching rates from ShipEngine:', error);
        res.status(500).json({ error: 'Failed to fetch rates from ShipEngine.' });
    }
};
