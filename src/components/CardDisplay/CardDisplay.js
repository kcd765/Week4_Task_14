import React from 'react'
import './cardDisplay.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { atomData } from '../../recoil/atomData';
import { useRecoilState } from 'recoil';

export const CardDisplay = () => {

    const [arr, setArr] = useRecoilState(atomData);

    const onDelete = (id) => {
        const arrF = arr.filter(info => {
            return info.details.id !== id
        })
        setArr(arrF)
    }

    return (
        <React.Fragment>
            {arr.length > 0 ? arr.map(info => {
                return (
                    <Card key="{info.details.id}" sx={{ width: "300px", marginTop: "5%", marginLeft: "auto", marginRight: "auto", marginBottom: "15%" }} >
                        <CardContent >
                            <Typography variant="h5" component="div">
                                Task: {info.details.task}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Date: {info.details.date}
                            </Typography>
                            <Typography variant="body2">
                                Details: {info.details.det}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={() => onDelete(info.details.id)}>Delete</Button>
                        </CardActions>
                    </Card>
                )
            }) : (<></>)}
        </React.Fragment>
    )
}