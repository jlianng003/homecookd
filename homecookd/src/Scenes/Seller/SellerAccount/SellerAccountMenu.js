import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const GridExampleColumnCount = () => (
  <Grid>
    <Grid.Row columns={3}>
      <Grid.Column>
        <Image src='/assets/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/assets/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/assets/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
    </Grid>
)
export default GridExampleColumnCount
