import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import MUICard from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

interface Props extends WithStyles<typeof styles> {
  title: string;
}

const styles = () => ({
  card: {
    maxWidth: '40vw',
    margin: '0 auto',
  },
});

const InnerCard: React.StatelessComponent<Props> = props => (
  <MUICard className={props.classes.card}>
    <CardHeader title={props.title} />
    <CardContent>{props.children}</CardContent>
  </MUICard>
);

export const Card = withStyles(styles)(InnerCard);
