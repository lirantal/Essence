import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

import Btn from 'essence-button';
import SnackBar from 'essence-snackbar';
import {Block, Text, Divider} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

class AppSnackBar extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	snackbar: false,
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

    renderSnackbar() {
        if (this.state.snackbar) {
            return (
                <SnackBar classes={'e-text-blue-500'} visible={true} delay={5000}>
                    You got a new message!
                </SnackBar>
            );
        }
        return;
    }

    toggleSnackBar() {
        var snackbarStatus = !this.state.snackbar;

        this.setState({
            snackbar: snackbarStatus
        });
    }

    render() {
        return (
			<Block classes={ClassNames('e-container e-padding-top-25', this.state.classes)}>
				<Block classes={'brick brick-12'}>
		        	<Card>
		        		<CardHeader> 
		        			<Text type={'h3'} classes={'e-text-indigo-400'}>SNACKBARS</Text>
		        			<Divider classes={'thick short e-background-indigo-400'} />
							<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
								Remember those confirmation messages from long time ago? They’re now called snackbars and toasts and they come with rules. Head onto Google to check out how to use them. Then check out the below examples hot to integrate them from Essence.
							</Text>
		        		</CardHeader>

		        		<CardContent>
			        		<Block classes={'e-text-center'}>
		        				<Block className={ClassNames('e-row e-padding-bottom-25')}>
									{this.renderSnackbar()}
                					<Btn 
                						type={'primary'} 
                						label={'Snow Snackbar'}
                						onClick={this.toggleSnackBar.bind(this)} 
                						className={'flat'} />
								</Block>
		        			</Block>

		        			<Block>
		        				<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
		        				<Divider classes={'thick short e-background-indigo-400'} />

		        				<pre className={'e-background-grey-100 e-text-black'}>
			        				<code>
										npm install <strong>essence-snackbar</strong>
			        				</code>
		        				</pre>

		        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
									To customise the hide function for SnackBar modify the number from option <strong>delay</strong> with a delay in miliseconds. 
								</Text>

		        				<pre className={'e-background-grey-100 e-text-black'}>
			        				<code>
										import SnackBar from 'essence-snackbar';
										<br />
										<br />
										&lt;SnackBar classes=&#123;'e-text-green-500'&#125; visible=&#123;true&#125; delay=&#123;5000&#125;&gt;
										<br />
										&nbsp;You got a new message!
										<br />
										&lt;/SnackBar&gt;
										<br />
			        				</code>
		        				</pre>
		        			</Block>
		        		</CardContent>
					</Card>
				</Block>
			</Block>
		);
    }
}

exports.AppSnackBar = AppSnackBar;