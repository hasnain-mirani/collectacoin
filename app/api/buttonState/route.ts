import { connect } from "@/dbconfig/dbconfig";
import { NextRequest } from 'next/server';
import createEvent from "@/modals/createEventModal";
import buttonEvent from "@/modals/buttonModal";

connect();

export async function POST(Req: NextRequest) {
    try {
        const count = await createEvent.count();
        const request = await Req.json();
        const { buttonNumber } = await request;
        let existingNumber = await buttonEvent.findOne({ buttonNumber });
        if (existingNumber) {
            if (existingNumber.state === 1) {
                existingNumber.buttonState = 'BookmarkBorderOutlinedIcon';
                existingNumber.state = 0;
                existingNumber.save();

            }
            else {
                existingNumber.buttonState = 'BookmarkAddedSharpIcon';
                existingNumber.state = 1;
                existingNumber.save();

            }

        }
        else {
            const countButton = await buttonEvent.count();
            if (countButton === count) {
                new buttonEvent({
                    buttonNumber: countButton + 1,
                    buttonState: 'BookmarkBorderOutlinedIcon',
                    state: 0,
                }). save();
                const currentButton = await buttonEvent.findOne({ buttonNumber });
                currentButton.buttonState = 'BookmarkAddedSharpIcon';
                currentButton.state = 1;
                currentButton.save();

            }
            else if (countButton < count) {
                for (let i = 0; i < count - countButton; i++) {
                    new buttonEvent({
                        buttonNumber: countButton + i,
                        buttonState: 'BookmarkBorderOutlinedIcon',
                        state: 0,
                    }).save();

                }
                const currentButton = await buttonEvent.findOne({ buttonNumber });
                currentButton.buttonState = 'BookmarkAddedSharpIcon';
                currentButton.state = 1;
                currentButton.save();
            }
        }
    }
    catch (error: any) {
        console.log(error.message);
    }
}